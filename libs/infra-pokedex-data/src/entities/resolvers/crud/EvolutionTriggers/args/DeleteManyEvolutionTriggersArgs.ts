import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionTriggersWhereInput } from "../../../inputs/EvolutionTriggersWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEvolutionTriggersArgs {
  @TypeGraphQL.Field(_type => EvolutionTriggersWhereInput, {
    nullable: true
  })
  where?: EvolutionTriggersWhereInput | undefined;
}
