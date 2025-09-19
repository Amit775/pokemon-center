import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestEffectCreateManyInput } from "../../../inputs/ContestEffectCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyContestEffectArgs {
  @TypeGraphQL.Field(_type => [ContestEffectCreateManyInput], {
    nullable: false
  })
  data!: ContestEffectCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
