import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeCreateManyInput } from "../../../inputs/TypeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnTypeArgs {
  @TypeGraphQL.Field(_type => [TypeCreateManyInput], {
    nullable: false
  })
  data!: TypeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
