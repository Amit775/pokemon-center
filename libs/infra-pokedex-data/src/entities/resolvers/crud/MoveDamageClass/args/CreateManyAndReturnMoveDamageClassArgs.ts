import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveDamageClassCreateManyInput } from "../../../inputs/MoveDamageClassCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnMoveDamageClassArgs {
  @TypeGraphQL.Field(_type => [MoveDamageClassCreateManyInput], {
    nullable: false
  })
  data!: MoveDamageClassCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
