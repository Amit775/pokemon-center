import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestEffectsCreateManyInput } from "../../../inputs/ContestEffectsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnContestEffectsArgs {
  @TypeGraphQL.Field(_type => [ContestEffectsCreateManyInput], {
    nullable: false
  })
  data!: ContestEffectsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
