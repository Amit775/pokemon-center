import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagsCreateManyInput } from "../../../inputs/MoveFlagsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMoveFlagsArgs {
  @TypeGraphQL.Field(_type => [MoveFlagsCreateManyInput], {
    nullable: false
  })
  data!: MoveFlagsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
