import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagMapCreateManyInput } from "../../../inputs/MoveFlagMapCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMoveFlagMapArgs {
  @TypeGraphQL.Field(_type => [MoveFlagMapCreateManyInput], {
    nullable: false
  })
  data!: MoveFlagMapCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
