import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EggGroupCreateManyInput } from "../../../inputs/EggGroupCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnEggGroupArgs {
  @TypeGraphQL.Field(_type => [EggGroupCreateManyInput], {
    nullable: false
  })
  data!: EggGroupCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
