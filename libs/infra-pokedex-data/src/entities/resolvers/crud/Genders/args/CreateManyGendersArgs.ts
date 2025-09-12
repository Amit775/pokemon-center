import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GendersCreateManyInput } from "../../../inputs/GendersCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyGendersArgs {
  @TypeGraphQL.Field(_type => [GendersCreateManyInput], {
    nullable: false
  })
  data!: GendersCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
