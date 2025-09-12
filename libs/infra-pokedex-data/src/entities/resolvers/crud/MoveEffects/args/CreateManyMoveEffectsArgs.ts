import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveEffectsCreateManyInput } from "../../../inputs/MoveEffectsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMoveEffectsArgs {
  @TypeGraphQL.Field(_type => [MoveEffectsCreateManyInput], {
    nullable: false
  })
  data!: MoveEffectsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
