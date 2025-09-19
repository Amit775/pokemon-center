import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenderCreateManyInput } from "../../../inputs/GenderCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnGenderArgs {
  @TypeGraphQL.Field(_type => [GenderCreateManyInput], {
    nullable: false
  })
  data!: GenderCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
