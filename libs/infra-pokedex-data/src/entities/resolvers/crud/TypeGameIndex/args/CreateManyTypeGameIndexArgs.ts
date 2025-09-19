import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeGameIndexCreateManyInput } from "../../../inputs/TypeGameIndexCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTypeGameIndexArgs {
  @TypeGraphQL.Field(_type => [TypeGameIndexCreateManyInput], {
    nullable: false
  })
  data!: TypeGameIndexCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
