import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaCategoryCreateManyInput } from "../../../inputs/MoveMetaCategoryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMoveMetaCategoryArgs {
  @TypeGraphQL.Field(_type => [MoveMetaCategoryCreateManyInput], {
    nullable: false
  })
  data!: MoveMetaCategoryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
