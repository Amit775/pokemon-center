import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemPocketsOrderByWithRelationInput } from "../../../inputs/ItemPocketsOrderByWithRelationInput";
import { ItemPocketsWhereInput } from "../../../inputs/ItemPocketsWhereInput";
import { ItemPocketsWhereUniqueInput } from "../../../inputs/ItemPocketsWhereUniqueInput";
import { ItemPocketsScalarFieldEnum } from "../../../../enums/ItemPocketsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyItemPocketsArgs {
  @TypeGraphQL.Field(_type => ItemPocketsWhereInput, {
    nullable: true
  })
  where?: ItemPocketsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemPocketsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ItemPocketsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemPocketsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ItemPocketsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ItemPocketsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}
