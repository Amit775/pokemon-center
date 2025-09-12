import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexVersionGroupsCreateManyInput } from "../../../inputs/PokedexVersionGroupsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPokedexVersionGroupsArgs {
  @TypeGraphQL.Field(_type => [PokedexVersionGroupsCreateManyInput], {
    nullable: false
  })
  data!: PokedexVersionGroupsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
