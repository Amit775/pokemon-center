import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureOrderByWithRelationInput } from "../../../inputs/NatureOrderByWithRelationInput";
import { NatureWhereInput } from "../../../inputs/NatureWhereInput";
import { NatureWhereUniqueInput } from "../../../inputs/NatureWhereUniqueInput";
import { NatureScalarFieldEnum } from "../../../../enums/NatureScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class TypeNaturesArgs {
  @TypeGraphQL.Field(_type => NatureWhereInput, {
    nullable: true
  })
  where?: NatureWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NatureOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: NatureOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => NatureWhereUniqueInput, {
    nullable: true
  })
  cursor?: NatureWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [NatureScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier" | "decreased_stat_id" | "increased_stat_id" | "hates_flavor_id" | "likes_flavor_id" | "game_index"> | undefined;
}
