import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveTargetCreateManyInput } from "../../../inputs/MoveTargetCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMoveTargetArgs {
  @TypeGraphQL.Field(_type => [MoveTargetCreateManyInput], {
    nullable: false
  })
  data!: MoveTargetCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
