import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionChainCreateInput } from "../../../inputs/EvolutionChainCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEvolutionChainArgs {
  @TypeGraphQL.Field(_type => EvolutionChainCreateInput, {
    nullable: false
  })
  data!: EvolutionChainCreateInput;
}
