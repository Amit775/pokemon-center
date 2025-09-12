import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemCategoriesOrderByWithRelationInput } from "../../../inputs/ItemCategoriesOrderByWithRelationInput";
import { ItemCategoriesWhereInput } from "../../../inputs/ItemCategoriesWhereInput";
import { ItemCategoriesWhereUniqueInput } from "../../../inputs/ItemCategoriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateItemCategoriesArgs {
  @TypeGraphQL.Field(_type => ItemCategoriesWhereInput, {
    nullable: true
  })
  where?: ItemCategoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoriesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ItemCategoriesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemCategoriesWhereUniqueInput, {
    nullable: true
  })
  cursor?: ItemCategoriesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
