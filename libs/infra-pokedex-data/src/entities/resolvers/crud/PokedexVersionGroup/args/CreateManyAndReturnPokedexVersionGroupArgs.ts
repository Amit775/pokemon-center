import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexVersionGroupCreateManyInput } from "../../../inputs/PokedexVersionGroupCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPokedexVersionGroupArgs {
  @TypeGraphQL.Field(_type => [PokedexVersionGroupCreateManyInput], {
    nullable: false
  })
  data!: PokedexVersionGroupCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
