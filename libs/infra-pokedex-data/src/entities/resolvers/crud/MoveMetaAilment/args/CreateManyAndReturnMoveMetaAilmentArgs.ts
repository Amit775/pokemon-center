import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaAilmentCreateManyInput } from "../../../inputs/MoveMetaAilmentCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnMoveMetaAilmentArgs {
  @TypeGraphQL.Field(_type => [MoveMetaAilmentCreateManyInput], {
    nullable: false
  })
  data!: MoveMetaAilmentCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
