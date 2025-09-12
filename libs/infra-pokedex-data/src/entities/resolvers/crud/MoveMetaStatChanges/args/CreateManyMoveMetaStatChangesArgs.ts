import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaStatChangesCreateManyInput } from "../../../inputs/MoveMetaStatChangesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMoveMetaStatChangesArgs {
  @TypeGraphQL.Field(_type => [MoveMetaStatChangesCreateManyInput], {
    nullable: false
  })
  data!: MoveMetaStatChangesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
