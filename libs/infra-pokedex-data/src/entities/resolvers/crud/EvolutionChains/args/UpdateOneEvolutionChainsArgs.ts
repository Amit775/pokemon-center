import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionChainsUpdateInput } from "../../../inputs/EvolutionChainsUpdateInput";
import { EvolutionChainsWhereUniqueInput } from "../../../inputs/EvolutionChainsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEvolutionChainsArgs {
  @TypeGraphQL.Field(_type => EvolutionChainsUpdateInput, {
    nullable: false
  })
  data!: EvolutionChainsUpdateInput;

  @TypeGraphQL.Field(_type => EvolutionChainsWhereUniqueInput, {
    nullable: false
  })
  where!: EvolutionChainsWhereUniqueInput;
}
