import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationGameIndicesCreateManyInput } from "../../../inputs/LocationGameIndicesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLocationGameIndicesArgs {
  @TypeGraphQL.Field(_type => [LocationGameIndicesCreateManyInput], {
    nullable: false
  })
  data!: LocationGameIndicesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
