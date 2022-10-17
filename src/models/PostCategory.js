module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false, 
            references: {
                model: 'blog_posts',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE' 
        },
        categoryId: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false, 
            references: {
                model: 'categories',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE' 
        }
    },
      {
        timestamps: false,
        tableName: 'posts_categories',
        underscored: true,
      });

    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        });

        models.Category.belongsToMany(models.BlogPost, {
            as: 'blog_posts',
            through: PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });
    }; 
  
    return PostCategory;
  };
  