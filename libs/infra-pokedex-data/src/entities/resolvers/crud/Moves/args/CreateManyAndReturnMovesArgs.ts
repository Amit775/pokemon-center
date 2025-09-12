import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovesCreateManyInput } from "../../../inputs/MovesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnMovesArgs {
  @TypeGraphQL.Field(_type => [MovesCreateManyInput], {
    nullable: false
  })
  data!: MovesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
