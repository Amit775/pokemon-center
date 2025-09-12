import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveTargetsCreateManyInput } from "../../../inputs/MoveTargetsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMoveTargetsArgs {
  @TypeGraphQL.Field(_type => [MoveTargetsCreateManyInput], {
    nullable: false
  })
  data!: MoveTargetsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
