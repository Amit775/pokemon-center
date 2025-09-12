import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveBattleStylesCreateManyInput } from "../../../inputs/MoveBattleStylesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnMoveBattleStylesArgs {
  @TypeGraphQL.Field(_type => [MoveBattleStylesCreateManyInput], {
    nullable: false
  })
  data!: MoveBattleStylesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
