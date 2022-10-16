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
        underscored: true
      });

    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostCategory,
            foregeinKey: 'postId',
            otherKey: 'categoryId'
        })

        models.Category.belongsToMany(models.BlogPost, {
            as: 'blog_posts',
            through: PostCategory,
            foregeinKey: 'categoryId',
            otherKey: 'postId'
        })
    }; 
  
    return PostCategory;
  };
  