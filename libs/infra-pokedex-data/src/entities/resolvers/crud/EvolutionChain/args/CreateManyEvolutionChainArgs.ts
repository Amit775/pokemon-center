import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionChainCreateManyInput } from "../../../inputs/EvolutionChainCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEvolutionChainArgs {
  @TypeGraphQL.Field(_type => [EvolutionChainCreateManyInput], {
    nullable: false
  })
  data!: EvolutionChainCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
