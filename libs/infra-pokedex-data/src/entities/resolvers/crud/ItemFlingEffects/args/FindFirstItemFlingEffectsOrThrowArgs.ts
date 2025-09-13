import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlingEffectsOrderByWithRelationInput } from "../../../inputs/ItemFlingEffectsOrderByWithRelationInput";
import { ItemFlingEffectsWhereInput } from "../../../inputs/ItemFlingEffectsWhereInput";
import { ItemFlingEffectsWhereUniqueInput } from "../../../inputs/ItemFlingEffectsWhereUniqueInput";
import { ItemFlingEffectsScalarFieldEnum } from "../../../../enums/ItemFlingEffectsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstItemFlingEffectsOrThrowArgs {
  @TypeGraphQL.Field(_type => ItemFlingEffectsWhereInput, {
    nullable: true
  })
  where?: ItemFlingEffectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemFlingEffectsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ItemFlingEffectsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ItemFlingEffectsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ItemFlingEffectsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}
