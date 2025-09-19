import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemWhereInput } from "../../inputs/ItemWhereInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnEvolutionChainBabyTriggerItemArgs {
  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  where?: ItemWhereInput | undefined;
}
