import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlingEffectOrderByWithRelationInput } from "../../../inputs/ItemFlingEffectOrderByWithRelationInput";
import { ItemFlingEffectWhereInput } from "../../../inputs/ItemFlingEffectWhereInput";
import { ItemFlingEffectWhereUniqueInput } from "../../../inputs/ItemFlingEffectWhereUniqueInput";
import { ItemFlingEffectScalarFieldEnum } from "../../../../enums/ItemFlingEffectScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyItemFlingEffectArgs {
  @TypeGraphQL.Field(_type => ItemFlingEffectWhereInput, {
    nullable: true
  })
  where?: ItemFlingEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemFlingEffectOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ItemFlingEffectOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectWhereUniqueInput, {
    nullable: true
  })
  cursor?: ItemFlingEffectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ItemFlingEffectScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}
