import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveDamageClassesCreateManyInput } from "../../../inputs/MoveDamageClassesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnMoveDamageClassesArgs {
  @TypeGraphQL.Field(_type => [MoveDamageClassesCreateManyInput], {
    nullable: false
  })
  data!: MoveDamageClassesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
