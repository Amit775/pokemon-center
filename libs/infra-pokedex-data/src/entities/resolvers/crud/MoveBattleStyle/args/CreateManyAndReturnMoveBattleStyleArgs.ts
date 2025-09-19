import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveBattleStyleCreateManyInput } from "../../../inputs/MoveBattleStyleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnMoveBattleStyleArgs {
  @TypeGraphQL.Field(_type => [MoveBattleStyleCreateManyInput], {
    nullable: false
  })
  data!: MoveBattleStyleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
