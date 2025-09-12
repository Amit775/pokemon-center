import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionTriggersCreateInput } from "../../../inputs/EvolutionTriggersCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEvolutionTriggersArgs {
  @TypeGraphQL.Field(_type => EvolutionTriggersCreateInput, {
    nullable: false
  })
  data!: EvolutionTriggersCreateInput;
}
