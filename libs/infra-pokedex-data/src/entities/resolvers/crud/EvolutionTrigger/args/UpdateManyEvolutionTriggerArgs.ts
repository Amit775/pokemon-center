import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionTriggerUpdateManyMutationInput } from "../../../inputs/EvolutionTriggerUpdateManyMutationInput";
import { EvolutionTriggerWhereInput } from "../../../inputs/EvolutionTriggerWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEvolutionTriggerArgs {
  @TypeGraphQL.Field(_type => EvolutionTriggerUpdateManyMutationInput, {
    nullable: false
  })
  data!: EvolutionTriggerUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EvolutionTriggerWhereInput, {
    nullable: true
  })
  where?: EvolutionTriggerWhereInput | undefined;
}
