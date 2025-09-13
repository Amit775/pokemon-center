import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionChainsOrderByWithRelationInput } from "../../../inputs/EvolutionChainsOrderByWithRelationInput";
import { EvolutionChainsWhereInput } from "../../../inputs/EvolutionChainsWhereInput";
import { EvolutionChainsWhereUniqueInput } from "../../../inputs/EvolutionChainsWhereUniqueInput";
import { EvolutionChainsScalarFieldEnum } from "../../../../enums/EvolutionChainsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyEvolutionChainsArgs {
  @TypeGraphQL.Field(_type => EvolutionChainsWhereInput, {
    nullable: true
  })
  where?: EvolutionChainsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EvolutionChainsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainsWhereUniqueInput, {
    nullable: true
  })
  cursor?: EvolutionChainsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "baby_trigger_item_id"> | undefined;
}
