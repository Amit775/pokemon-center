import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionTriggersUpdateInput } from "../../../inputs/EvolutionTriggersUpdateInput";
import { EvolutionTriggersWhereUniqueInput } from "../../../inputs/EvolutionTriggersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEvolutionTriggersArgs {
  @TypeGraphQL.Field(_type => EvolutionTriggersUpdateInput, {
    nullable: false
  })
  data!: EvolutionTriggersUpdateInput;

  @TypeGraphQL.Field(_type => EvolutionTriggersWhereUniqueInput, {
    nullable: false
  })
  where!: EvolutionTriggersWhereUniqueInput;
}
