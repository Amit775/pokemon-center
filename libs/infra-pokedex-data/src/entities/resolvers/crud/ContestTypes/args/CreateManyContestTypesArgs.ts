import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestTypesCreateManyInput } from "../../../inputs/ContestTypesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyContestTypesArgs {
  @TypeGraphQL.Field(_type => [ContestTypesCreateManyInput], {
    nullable: false
  })
  data!: ContestTypesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
