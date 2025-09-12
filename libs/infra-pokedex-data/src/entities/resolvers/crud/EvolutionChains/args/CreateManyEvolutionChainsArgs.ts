import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionChainsCreateManyInput } from "../../../inputs/EvolutionChainsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEvolutionChainsArgs {
  @TypeGraphQL.Field(_type => [EvolutionChainsCreateManyInput], {
    nullable: false
  })
  data!: EvolutionChainsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
