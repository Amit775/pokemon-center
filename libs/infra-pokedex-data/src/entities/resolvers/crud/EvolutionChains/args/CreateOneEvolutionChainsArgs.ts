import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionChainsCreateInput } from "../../../inputs/EvolutionChainsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEvolutionChainsArgs {
  @TypeGraphQL.Field(_type => EvolutionChainsCreateInput, {
    nullable: false
  })
  data!: EvolutionChainsCreateInput;
}
