import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionChainsWhereUniqueInput } from "../../../inputs/EvolutionChainsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEvolutionChainsArgs {
  @TypeGraphQL.Field(_type => EvolutionChainsWhereUniqueInput, {
    nullable: false
  })
  where!: EvolutionChainsWhereUniqueInput;
}
