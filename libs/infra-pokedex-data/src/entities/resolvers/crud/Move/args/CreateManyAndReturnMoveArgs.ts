import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveCreateManyInput } from "../../../inputs/MoveCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnMoveArgs {
  @TypeGraphQL.Field(_type => [MoveCreateManyInput], {
    nullable: false
  })
  data!: MoveCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
