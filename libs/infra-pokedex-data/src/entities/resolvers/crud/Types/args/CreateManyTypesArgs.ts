import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypesCreateManyInput } from "../../../inputs/TypesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTypesArgs {
  @TypeGraphQL.Field(_type => [TypesCreateManyInput], {
    nullable: false
  })
  data!: TypesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
