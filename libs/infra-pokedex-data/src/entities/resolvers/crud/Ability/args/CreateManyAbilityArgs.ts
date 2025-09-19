import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbilityCreateManyInput } from "../../../inputs/AbilityCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAbilityArgs {
  @TypeGraphQL.Field(_type => [AbilityCreateManyInput], {
    nullable: false
  })
  data!: AbilityCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
