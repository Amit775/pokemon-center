import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeEfficacyCreateManyInput } from "../../../inputs/TypeEfficacyCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnTypeEfficacyArgs {
  @TypeGraphQL.Field(_type => [TypeEfficacyCreateManyInput], {
    nullable: false
  })
  data!: TypeEfficacyCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
