import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexCreateManyInput } from "../../../inputs/PokedexCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPokedexArgs {
  @TypeGraphQL.Field(_type => [PokedexCreateManyInput], {
    nullable: false
  })
  data!: PokedexCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
