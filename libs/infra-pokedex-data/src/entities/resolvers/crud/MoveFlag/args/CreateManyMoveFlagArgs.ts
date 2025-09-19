import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagCreateManyInput } from "../../../inputs/MoveFlagCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMoveFlagArgs {
  @TypeGraphQL.Field(_type => [MoveFlagCreateManyInput], {
    nullable: false
  })
  data!: MoveFlagCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
