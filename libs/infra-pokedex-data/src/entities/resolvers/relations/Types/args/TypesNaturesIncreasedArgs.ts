import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NaturesOrderByWithRelationInput } from "../../../inputs/NaturesOrderByWithRelationInput";
import { NaturesWhereInput } from "../../../inputs/NaturesWhereInput";
import { NaturesWhereUniqueInput } from "../../../inputs/NaturesWhereUniqueInput";
import { NaturesScalarFieldEnum } from "../../../../enums/NaturesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class TypesNaturesIncreasedArgs {
  @TypeGraphQL.Field(_type => NaturesWhereInput, {
    nullable: true
  })
  where?: NaturesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NaturesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: NaturesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => NaturesWhereUniqueInput, {
    nullable: true
  })
  cursor?: NaturesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [NaturesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier" | "decreased_stat_id" | "increased_stat_id" | "hates_flavor_id" | "likes_flavor_id" | "game_index"> | undefined;
}
