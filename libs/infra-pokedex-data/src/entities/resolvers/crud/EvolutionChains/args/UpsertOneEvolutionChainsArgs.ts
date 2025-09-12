import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionChainsCreateInput } from "../../../inputs/EvolutionChainsCreateInput";
import { EvolutionChainsUpdateInput } from "../../../inputs/EvolutionChainsUpdateInput";
import { EvolutionChainsWhereUniqueInput } from "../../../inputs/EvolutionChainsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEvolutionChainsArgs {
  @TypeGraphQL.Field(_type => EvolutionChainsWhereUniqueInput, {
    nullable: false
  })
  where!: EvolutionChainsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EvolutionChainsCreateInput, {
    nullable: false
  })
  create!: EvolutionChainsCreateInput;

  @TypeGraphQL.Field(_type => EvolutionChainsUpdateInput, {
    nullable: false
  })
  update!: EvolutionChainsUpdateInput;
}
