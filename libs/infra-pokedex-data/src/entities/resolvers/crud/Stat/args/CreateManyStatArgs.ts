import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatCreateManyInput } from "../../../inputs/StatCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyStatArgs {
  @TypeGraphQL.Field(_type => [StatCreateManyInput], {
    nullable: false
  })
  data!: StatCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
