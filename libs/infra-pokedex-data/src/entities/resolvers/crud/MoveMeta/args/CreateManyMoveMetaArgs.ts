import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaCreateManyInput } from "../../../inputs/MoveMetaCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMoveMetaArgs {
  @TypeGraphQL.Field(_type => [MoveMetaCreateManyInput], {
    nullable: false
  })
  data!: MoveMetaCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
