import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionTriggersUpdateManyMutationInput } from "../../../inputs/EvolutionTriggersUpdateManyMutationInput";
import { EvolutionTriggersWhereInput } from "../../../inputs/EvolutionTriggersWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEvolutionTriggersArgs {
  @TypeGraphQL.Field(_type => EvolutionTriggersUpdateManyMutationInput, {
    nullable: false
  })
  data!: EvolutionTriggersUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EvolutionTriggersWhereInput, {
    nullable: true
  })
  where?: EvolutionTriggersWhereInput | undefined;
}
